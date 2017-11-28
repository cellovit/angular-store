import { User } from '../user/user.model';
import { Product } from '../product/product.model';

export class Wishlist {
    id: string;
    user: User;
    products: Product[];
    totalValue: number;
}
