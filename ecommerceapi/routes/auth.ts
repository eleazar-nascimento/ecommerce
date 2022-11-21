import express, { Request, Response } from 'express';
import CryptoJs from 'crypto-js';
import jwt from "jsonwebtoken";

import UserModel from '../models/User.js';

const router = express();

//Register
router.post("/register", async (request, response) => {
  const newUser = new UserModel({
    username: request.body.username,
    email: request.body.email,
    password: CryptoJs.AES.encrypt(
      request.body.password,
      process.env.PASSWORD_SEC || ''
    ).toString(),
  })

  try {
    const savedUser = await newUser.save();
    response.status(201).json(savedUser);
    console.log(savedUser);

  } catch (error) {
    response.status(500).json(error);
    console.log(error);
  }

})

// Login

router.post("/login", async (request: Request, response: Response) => {
  try {
    const user = await UserModel.findOne({
      username: request.body.username
    });

    if (!user) {
      response.status(401).json("Wrong username!");
    }

    // const userExists = await UserModel.where({
    //   username: request.body.username
    // });

    // response.json(userExists);

    if (user?.password && process.env.PASSWORD_SEC) {
      const hashedPassword = CryptoJs.AES.decrypt(
        user?.password,
        process.env.PASSWORD_SEC,
      );

      const originalPassword = hashedPassword.toString(CryptoJs.enc.Utf8);
      originalPassword !== request.body.password &&
        response.status(401).json("Wrong credentials!");

      hashedPassword;

      const accessToken = jwt.sign({
        id: user?.["_id"],
        isAdmin: user.isAdmin,
      }, process.env.JWT_SEC || '',
        { expiresIn: "3d" })

      if (user) {
        const { password, ...others } = user?.["_doc"];
        response.status(200).json({ ...others, accessToken });
      }
    }


  } catch (error) {
    response.status(500).json(error);
  }
})


export { router };