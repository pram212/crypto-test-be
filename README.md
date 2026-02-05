# Crypto Test Backend

## Overview
This project is a backend service for managing cryptocurrency deposits. It provides APIs to retrieve member and deposit information.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
  - [Member API](#member-api)
  - [Deposit API](#deposit-api)
- [Environment Variables](#environment-variables)

## Installation
1. Clone the repository:
   ```sh
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```sh
   cd crypto-test-be
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Generate .env file config
    ```sh
    cp .env.example .env
    ```

## Usage
To start the server, run:
```sh
npm run dev
```
The server will run on `http://localhost:3000`.

## API Endpoints

### Member API
- **GET** `/api/member`
  - Retrieves a list of members and their deposits.
  - **Response:**
    ```json
    {
      "status": true,
      "message": "List of deposits retrieved successfully",
      "data": [...]
    }
    ```

### Deposit API
- **GET** `/api/deposit`
  - Retrieves a list of deposits.
  - **Response:**
    ```json
    {
      "status": "success",
      "message": "List of deposits retrieved successfully",
      "data": [...]
    }
    ```

## Environment Variables
The following environment variables are used in the project:
- `PORT`: The port on which the server will run (default is 3000).
- `APP_NAME`: The name of the application.
- `NODE_ENV`: The environment in which the application is running (e.g., development).