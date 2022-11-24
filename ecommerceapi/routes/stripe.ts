import express from "express";
import Stripe from "stripe";

const router = express();

const stripe = new Stripe(
    process.env.STRIPE_KEY || '',
    {
        apiVersion: '2022-11-15',
        appInfo: {
            name: 'ecommerce_app',
            version: '0.1.0'
        }
    }
);

router.post("/payment", (request, response) => {
    stripe.charges.create({
        source: request.body.tokenId,
        amount: request.body.amount,
        currency: "usd"
    }), (stripeError: any, stripeResponse: any) => {
        if (stripeError) {
            response.status(500).json(stripeError)
        } else {
            response.status(200).json(stripeResponse);
        }
    };
})


