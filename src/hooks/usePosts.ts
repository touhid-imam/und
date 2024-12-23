import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import Post from "../entities/Post";
import moment from "moment";


const apiClient = new APIClient<Post>('/post')

const fetchPosts = async (from: string, to: string) => {
    try{
        const response = await apiClient.getAll({
            params: { from, to }
        });
    
        // Check if data is directly returned
        if (Array.isArray(response)) {
            return response;  // Directly return if response is an array
        } else if (response?.results) {
            return response.results;
        } else {
            console.warn(`No results field in response from ${from} to ${to}`);
            return [];
        }
    } catch(error){
        console.error(`Failed to fetch posts from ${from} to ${to}`, error);
    }
    
}

// Generate 3-day intervals for API calls
const generateDateRanges = (daysBack: number) => {
    const ranges = [];
    const currentDate = moment();
  
    for (let i = 0; i < daysBack; i += 3) {
      const to = currentDate.format('YYYY-MM-DD');
      const from = currentDate.clone().subtract(2, 'days').format('YYYY-MM-DD');
      ranges.push({ from, to });
      currentDate.subtract(3, 'days');  // Shift exactly 3 days after each interval
    }
    
    return ranges;
  };




const usePosts = () => {
    const fetchRange = async () => {
        const dateRanges = generateDateRanges(9);
        // Fetch posts for each 3-day interval
        const results = await Promise.all(
            dateRanges.map(({ from, to }) => {
            return fetchPosts(from, to);
            })
      );
      return results.flat();
    }

    return useQuery({
        queryKey: ['posts'],
        queryFn: fetchRange,
        staleTime: 1000 * 60 * 10, // Cache for 10 minutes
    })
}

export default usePosts;