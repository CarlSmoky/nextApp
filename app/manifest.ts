import { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Momo gallery",
        short_name: "Momo Gallery",
        description: "Visual Artist and Performer Noriko Yamamoto",
        start_url: "/",
        display: "standalone",
        background_color: "#FAF5F2",
        theme_color: "#FAF5F2",
        icons: [
            {
                "src": "/images/icon-192.png",
                "sizes": "192x192",
                "type": "image/png"
            },
            {
                "src": "/images/icon-512.png",
                "sizes": "512x512",
                "type": "image/png"
            },
        ],
    }
}