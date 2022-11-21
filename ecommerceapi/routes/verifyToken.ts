import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from 'express';

export const verifyToken = (request: any, response: Response, next: NextFunction) => {
  const authHeader = request.headers.token;

  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.JWT_SEC || '', (error: any, user: any) => {
      if (error) response.status(403).json("Token is not valid!")
      request.user = user;
      next();
    });
  } else {
    return response.status(401).json("You are not authenticated!")
  }
};

export const verifyTokenAndAuthorization = (request: any, response: Response, next: NextFunction) => {
  verifyToken(request, response, () => {
    if (request.user?.id === request.params.id || request.user.isAdmin) {
      next()
    } else {
      response.status(403).json("You are not allowed to do that!")
    }
  })
}

export const verifyTokenAndAdmin = (request: any, response: Response, next: NextFunction) => {
  verifyToken(request, response, () => {
    if (request.user.isAdmin) {
      next()
    } else {
      response.status(403).json("You are not allowed to do that!")
    }
  })
}
