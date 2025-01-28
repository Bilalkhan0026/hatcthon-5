interface IProduct {
  imageUrl(imageUrl: any): unknown;
  _id: string;
  name: string;
  category: string;
  price: number;
  originalPrice: number;
  tags: string[];

  image?: {
    asset :{
        _ref : string;
        type : "image";
    }
  }
  description: string;
  available: boolean;
 
  slug: {
    _type: "slug";
    current: string;
  };
  inventory: number; 
}

