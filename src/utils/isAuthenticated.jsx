export const isAuthenticated = () => {
    // Retrieve the JWT from local storage
    const token = localStorage.getItem('jwtToken');
    
    // Return true if the token exists, indicating the user is authenticated
    return token !== null;
};