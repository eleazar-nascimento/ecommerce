import express, { Response, Request } from 'express';
import UserModel from '../models/User';

import { verifyTokenAndAdmin, verifyTokenAndAuthorization } from "./verifyToken";

const router = express();


// Update
router.put("/:id", verifyTokenAndAuthorization, async (request: Request, response: Response) => {
  if (request.body.password) {
    request.body.password = CryptoJS.AES.encrypt(
      request.body.password,
      process.env.PASSWORD_SEC || ''
    ).toString();
  }
  try {
    const updatedUser = await UserModel.findByIdAndUpdate(request.params.id, {
      $set: request.body
    }, { new: true })
    response.status(200).json(updatedUser);
  } catch (error) {
    response.status(500).json(error);
  }
})

// Delete
router.delete("/:id", verifyTokenAndAuthorization, async (request, response) => {
  try {
    await UserModel.findByIdAndDelete(request.params.id);

    response.status(200).json("User has benn deleted.");
  } catch (error) {
    response.status(500).json(error)
  }
})

// Get User
router.get("/find/:id", verifyTokenAndAdmin, async (request, response) => {
  try {
    const user: any = await UserModel.findById(request.params.id);
    const { password, ...others } = user?.["_doc"];

    response.status(200).json(others);
  } catch (error) {
    response.status(500).json(error)
  }
})

// Get all Users
router.get("/", verifyTokenAndAdmin, async (request, response) => {
  const query = request.query.new;
  try {
    const users: any = query
      ? await UserModel.find().sort({ _id: -1 }).limit(5)
      : await UserModel.find();

    response.status(200).json(users);
  } catch (error) {
    response.status(500).json(error)
  }
})

// Get user stats
router.get("/stats", verifyTokenAndAdmin, async (request, response) => {
  const date = new Date();
  const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

  try {
    const data = await UserModel.aggregate([
      { $match: { createdAt: { $gte: lastYear } } },
      {
        $project: {
          month: { $month: "$createdAt" }
        }
      }, {
        $group: {
          _id: "$month",
          total: { $sum: 1 }
        }
      }
    ]);

    response.status(200).json(data);
  } catch (error) {
    response.status(500).json(error);
  }
})

export { router };