# ALX Project Nexus

## Overview
This repository serves as a documentation hub for my major learnings from the ALX ProDev Frontend Engineering program. It showcases a hands-on a dynamic e-commerce product catalog.

## Project: My Duka
A React + TypeScript e-commerce catalog with API integration, filtering, sorting, pagination, and infinite scrolling.

## Technologies Used
- **React / React Native** – Component-based UI development.
- **Redux** – Efficient state management.
- **TypeScript** – Type safety and maintainable code.
- **Tailwind CSS** – Modern and responsive UI styling.
- **Axios** - Javascript library to Communicate with APIs to fetch, send, or update data.

I used this to link to fakestoreapi
import axios from "axios";
async function fetchData() {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

## Key Features
### 1. API Data Integration
- Dynamic fetching and rendering of product data.
- Includes error handling and loading states for smooth UX.

### 2. Filtering and Sorting
- **Category Filtering** – View products based on categories.
- **Price Sorting** – Sort products by ascending or descending prices.
- **Multi-Criteria Filters** – Combine filters for refined results.

### 3. Pagination and Infinite Scrolling
- I decided to use Infinite scrolling to dynamically load products as users scroll.

### 4. Responsive Design
- Fully responsive layout across desktops, tablets, and mobile devices.

### Git Commit Workflow
**Initial Setup**
feat: set up project structure with React,Tailwind and TypeScript
feat: add API integration for fetching product data

### Feature Development
feat: implement product filtering and sorting functionality
feat: add pagination and infinite scrolling

### UI Enhancements
style: enhance UI with Tailwind CSS

### Bug Fixes
fix: resolve bug in filtering logic
fix: Deployment to vercel
fix: error 404
fix: page routing

## Deployment
Deployed to Vercel or Netlify for public access.

## Challenges and Solutions
**Challenge:** Optimizing infinite scrolling without performance lag.
**Solution:** Implemented lazy loading and batch API requests.

**Challenge:** Ensuring consistent UI across devices.
**Solution:** Utilized responsive design with Tailwind CSS and media queries.

**Challenge:** Managing state efficiently for filters and sorting.
**Solution:** Leveraged Redux with TypeScript for structured state management.

### Best Practices and Takeaways
1. Maintain clean and modular code for readability and scalability.
2. Use TypeScript interfaces and types to prevent runtime errors.
3. Structure Redux state efficiently for predictable state changes.
4. Always ensure responsive and accessible design for all users.
5. Commit often with descriptive messages for better version control.

### Next Steps
1. Expand features to include user authentication and checkout.
2. Integrate more advanced filtering like rating and availability.
3. Continuously optimize performance for large datasets.

## Contact
For questions or feedback, feel free to reach out via https://github.com/mikenbze

##GitHub Link
Link to the GitHub repository for my project
https://github.com/mikenbze/alx-project-nexus


##Hosted Project Link
Link to where Project is hosted.
https://nexus-mikenbze-mikenbzes-projects.vercel.app/
