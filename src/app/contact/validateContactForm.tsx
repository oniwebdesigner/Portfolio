// validateContactForm.ts
// Define an interface for validation errors
interface ValidationErrors {
    name?: string;
    email?: string;
    message?: string;
  }
  
  // Function to validate the contact form inputs
  export const validateContactForm = (name: string, email: string, message: string): ValidationErrors => {
    const errors: ValidationErrors = {};
  
    // Check if the name field is empty
    if (!name) {
      errors.name = 'Name is required';
    }
  
    // Check if the email field is empty and validate email format
    if (!email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is not valid';
    }
  
    // Check if the message field is empty
    if (!message) {
      errors.message = 'Message is required';
    }
  
    return errors; // Return any validation errors found
  };
  