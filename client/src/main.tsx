import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { Helmet, HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <Helmet>
      <title>BraveShop - Premium Products</title>
      <meta name="description" content="Discover our curated collection of high-quality products that enhance your everyday experience. BraveShop offers premium lifestyle products with fast shipping and excellent customer service." />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1" />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://braveshop.com/" />
      <meta property="og:title" content="BraveShop - Premium Products" />
      <meta property="og:description" content="Discover our curated collection of high-quality products that enhance your everyday experience." />
      <meta property="og:image" content="https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://braveshop.com/" />
      <meta property="twitter:title" content="BraveShop - Premium Products" />
      <meta property="twitter:description" content="Discover our curated collection of high-quality products that enhance your everyday experience." />
      <meta property="twitter:image" content="https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" />
    </Helmet>
    <App />
  </HelmetProvider>
);
