# README: Bloom & Brew - Tea Subscription Service - fe

## What?
This is an adminstrativfe portal for the Bloom & Brew tea subscription service.  This portal allows admins to check their list of subscriptions (both currently offered and canceled) and to view details of each subscription including: base information, included teas details, and subscribed customer details.  These is also an embedded behavior that allows admin to cancel subscriptions when they are no longer being offered.  Data management is maintained by the [backend](https://github.com/elysableu/tea_subscriptions_be) of this application.

<br>

![](BloomBrew-fe-demo.gif)

## Key Features
- Visually pleasing landing page with potential to add login
- Subscriptions page to dispaly all suscriptions and base information (title, price, status, frequency) of each subscription
- Upon clicking on a subscription card get redirected to a details page for that subscription
- Details page includes the base information of the subscription, a scrolling list of the teas in the subscription, and a scrolling list of currently subscribed customers
- Details page includes a cancel button to cancel that subscription (this makes a fetch request to the backend and updates the status)
- Details page also includes a navigational button to return to the subscriptions page

## Tech Stack
- npm 10.9.2
- React 19.0.0
- Vite 6.2.01
- Cypress 14.1.0

## Set up Locally
1. Fork this repository
2. Clone the repository: `git clone [remote-address] [new-name]`
    For example: `git clone git@github.com:elysableu/tea_subscriptions_fe.git`
3. `cd` into the directory
4. Install the dependencies `npm install`
5. Run this backend app with `npm run dev`
6. If not automatically openned, go to `http://localhost:5173/`
7. Enter `control + c` into terminal to stop app from running