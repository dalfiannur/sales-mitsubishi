import { ProductImage } from "./ProductImage";

export interface Product {
    id: number;
    name: string;
    slug: string;
    description: string;
    youtube_url: string;
    created_at: string;
    types: any[];
    images: ProductImage[];
}