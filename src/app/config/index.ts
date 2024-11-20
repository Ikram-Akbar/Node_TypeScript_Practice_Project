import dotenv from "dotenv";
import path from "path";


dotenv.config({ path: path.join(process.cwd(), '.env') });

// Export the environment variables
export default {
    PORT: process.env.PORT,
    MONGODB_URL: process.env.DB_URL,
}