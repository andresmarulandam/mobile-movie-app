# 🎥 Mobile Movie App

Mobile Movie App is a mobile application built with [Expo](https://expo.dev) that allows users to explore popular, top-rated, and the latest movies. The app leverages the [The Movie Database (TMDb)](https://www.themoviedb.org/) API to fetch movie information such as titles, descriptions, ratings, and posters.

## 🚀 Features

- **Explore Popular Movies**: Discover the most popular movies of the moment.
- **Search Movies**: Find your favorite movies using the integrated search bar.
- **Top-Rated Movies**: Browse movies with the highest ratings.
- **Movie Details**: View detailed information about each movie, including synopsis, rating, and more.
- **Modern Interface**: Sleek and responsive design optimized for mobile devices.
- **Dynamic Pagination**: Load more movies as you scroll without losing your current position.

## 🛠️ Technologies Used

- **Frontend**: [React Native](https://reactnative.dev/) with [Expo](https://expo.dev)
- **Navigation**: [Expo Router](https://expo.dev/router) for file-based routing
- **Styling**: [Tailwind CSS for React Native](https://github.com/vadimdemedes/tailwind-rn) (optional, if configured)
- **API**: [The Movie Database (TMDb)](https://www.themoviedb.org/) for movie data
- **State Management**: Custom hooks (`useFetch`) for API requests and pagination
- **Icons**: [AntDesign](https://github.com/ant-design/ant-design-icons) and [Feather Icons](https://feathericons.com/)

## 📱 Screenshots


![Screenshot_2025-04-04-15-23-36-024_host exp exponent](https://github.com/user-attachments/assets/d382403e-bc6d-4a24-920c-f40f40e17f77)
![Screenshot_2025-04-04-15-23-23-839_host exp exponent](https://github.com/user-attachments/assets/3d007b8a-3b8f-4e44-806b-b9d2ffe01e41)
![Screenshot_2025-04-04-15-22-36-760_host exp exponent](https://github.com/user-attachments/assets/724fcbd9-7ba2-420c-be8c-c26226f860b3)
![Screenshot_2025-04-04-15-22-43-998_host exp exponent](https://github.com/user-attachments/assets/0a88dca9-05ed-4b98-82dd-7390ddf85fb0)

## 📦 Installation

Follow these steps to set up and run the project locally:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/mobile-movie-app.git
   cd mobile-movie-app
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env` file in the root of the project and add your TMDb API access token:
   ```
   EXPO_API_Read_Access_Token=YOUR_ACCESS_TOKEN
   ```
4. **Start the application**:

   ```bash
   npx expo start
   ```

5. **Open the app**:
   - Scan the QR code in your terminal with the [Expo Go](https://expo.dev/client) app on your mobile device.
   - Or use an Android/iOS emulator.

## 🌐 API Used

This project uses the [The Movie Database (TMDb)](https://www.themoviedb.org/) API. To use the API, you need an access token. Follow these steps to obtain it:

1. Create an account on [TMDb](https://www.themoviedb.org/).
2. Go to your account settings and generate a read access token.
3. Add the token to the `.env` file as shown in the installation section.
