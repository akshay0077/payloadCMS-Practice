/** @type {import('next').NextConfig} */
const nextConfig = {
    env:{
        NEXT_PUBLIC_BACKEND_URL:'http://localhost:4000'
    },
    images:{
        remotePatterns:[
            {
                protocol:'http',
                hostname:'localhost',
                port:'4000'
            }
        ]
    }
};


export default nextConfig;
