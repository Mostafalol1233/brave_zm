import { 
  users, type User, type InsertUser,
  categories, type Category, type InsertCategory,
  products, type Product, type InsertProduct,
  teamMembers, type TeamMember, type InsertTeamMember,
  reviews, type Review, type InsertReview 
} from "@shared/schema";

export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Category methods
  getCategories(): Promise<Category[]>;
  getCategoryById(id: number): Promise<Category | undefined>;
  createCategory(category: InsertCategory): Promise<Category>;
  
  // Product methods
  getProducts(): Promise<Product[]>;
  getProductById(id: number): Promise<Product | undefined>;
  getProductsByCategory(categoryId: number): Promise<Product[]>;
  createProduct(product: InsertProduct): Promise<Product>;
  
  // Team member methods
  getTeamMembers(): Promise<TeamMember[]>;
  getTeamMemberById(id: number): Promise<TeamMember | undefined>;
  createTeamMember(teamMember: InsertTeamMember): Promise<TeamMember>;
  
  // Review methods
  getReviews(): Promise<Review[]>;
  getReviewById(id: number): Promise<Review | undefined>;
  createReview(review: InsertReview): Promise<Review>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private categories: Map<number, Category>;
  private products: Map<number, Product>;
  private teamMembers: Map<number, TeamMember>;
  private reviews: Map<number, Review>;
  
  private userCurrentId: number;
  private categoryCurrentId: number;
  private productCurrentId: number;
  private teamMemberCurrentId: number;
  private reviewCurrentId: number;
  
  constructor() {
    this.users = new Map();
    this.categories = new Map();
    this.products = new Map();
    this.teamMembers = new Map();
    this.reviews = new Map();
    
    this.userCurrentId = 1;
    this.categoryCurrentId = 1;
    this.productCurrentId = 1;
    this.teamMemberCurrentId = 1;
    this.reviewCurrentId = 1;
    
    this.initializeData();
  }
  
  private initializeData() {
    // Initialize with sample data
    const categories = [
      {
        name: "Electronics",
        icon: "fas fa-mobile-alt",
        description: "Latest gadgets and tech accessories",
        color: "primary"
      },
      {
        name: "Fashion",
        icon: "fas fa-tshirt",
        description: "Trendy clothing and accessories",
        color: "secondary"
      },
      {
        name: "Home Goods",
        icon: "fas fa-home",
        description: "Quality items for your living space",
        color: "accent"
      },
      {
        name: "Gifts",
        icon: "fas fa-gift",
        description: "Perfect presents for every occasion",
        color: "primary"
      }
    ];
    
    categories.forEach(category => this.createCategory(category));
    
    const products = [
      {
        name: "Premium Wireless Headphones",
        description: "Experience premium sound quality with our comfortable wireless headphones.",
        price: 129.99,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        rating: 4.5,
        reviewCount: 120,
        categoryId: 1,
        whatsappMessage: "I'm interested in the Premium Wireless Headphones"
      },
      {
        name: "Smart Watch Pro",
        description: "Track your fitness goals and stay connected with this premium smartwatch.",
        price: 199.99,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        rating: 5.0,
        reviewCount: 89,
        categoryId: 1,
        whatsappMessage: "I'm interested in the Smart Watch Pro"
      },
      {
        name: "Premium Leather Wallet",
        description: "Handcrafted genuine leather wallet with RFID protection technology.",
        price: 49.99,
        image: "https://images.unsplash.com/photo-1627123424574-724758594e93?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        rating: 4.0,
        reviewCount: 56,
        categoryId: 2,
        whatsappMessage: "I'm interested in the Premium Leather Wallet"
      },
      {
        name: "Modern Desk Lamp",
        description: "Stylish desk lamp with adjustable brightness and wireless charging base.",
        price: 79.99,
        image: "https://images.unsplash.com/photo-1507764923504-cd90bf7da772?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        rating: 3.5,
        reviewCount: 42,
        categoryId: 3,
        whatsappMessage: "I'm interested in the Modern Desk Lamp"
      },
      {
        name: "Ceramic Coffee Mug Set",
        description: "Set of 4 handcrafted ceramic mugs in minimalist design and pastel colors.",
        price: 39.99,
        image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        rating: 4.5,
        reviewCount: 67,
        categoryId: 3,
        whatsappMessage: "I'm interested in the Ceramic Coffee Mug Set"
      },
      {
        name: "Travel Backpack Pro",
        description: "Water-resistant backpack with multiple compartments and laptop sleeve.",
        price: 89.99,
        image: "https://images.unsplash.com/photo-1581605405669-fcdf81165afa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        rating: 4.0,
        reviewCount: 95,
        categoryId: 2,
        whatsappMessage: "I'm interested in the Travel Backpack Pro"
      }
    ];
    
    products.forEach(product => this.createProduct(product));
    
    const teamMembers = [
      {
        name: "David Wilson",
        role: "Founder & CEO",
        bio: "David founded BraveShop with a vision to create a curated online shopping experience for quality-conscious consumers.",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        social: JSON.stringify({
          twitter: "#",
          linkedin: "#",
          instagram: "#"
        })
      },
      {
        name: "Sarah Johnson",
        role: "Head of Product",
        bio: "Sarah leads our product curation team, ensuring that every item meets our quality standards before being added to our collection.",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        social: JSON.stringify({
          twitter: "#",
          linkedin: "#",
          instagram: "#"
        })
      },
      {
        name: "Michael Brown",
        role: "Customer Experience",
        bio: "Michael oversees our customer support team, ensuring that every customer receives prompt and helpful assistance.",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        social: JSON.stringify({
          twitter: "#",
          linkedin: "#",
          instagram: "#"
        })
      }
    ];
    
    teamMembers.forEach(member => this.createTeamMember(member));
    
    const reviews = [
      {
        name: "Robert M.",
        review: "I've purchased several items from BraveShop and have been impressed by the quality every time. Their customer service is also exceptional!",
        rating: 5.0,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80",
        verified: true
      },
      {
        name: "Jennifer K.",
        review: "The Premium Wireless Headphones exceeded my expectations. Great sound quality and the battery life is amazing. Definitely worth the investment.",
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80",
        verified: true
      },
      {
        name: "Thomas L.",
        review: "Fast shipping and excellent product quality. I ordered the Travel Backpack Pro and it arrived in perfect condition. Will definitely shop here again!",
        rating: 5.0,
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80",
        verified: true
      }
    ];
    
    reviews.forEach(review => this.createReview(review));
  }
  
  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userCurrentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  // Category methods
  async getCategories(): Promise<Category[]> {
    return Array.from(this.categories.values());
  }
  
  async getCategoryById(id: number): Promise<Category | undefined> {
    return this.categories.get(id);
  }
  
  async createCategory(insertCategory: InsertCategory): Promise<Category> {
    const id = this.categoryCurrentId++;
    const category: Category = { ...insertCategory, id };
    this.categories.set(id, category);
    return category;
  }
  
  // Product methods
  async getProducts(): Promise<Product[]> {
    return Array.from(this.products.values());
  }
  
  async getProductById(id: number): Promise<Product | undefined> {
    return this.products.get(id);
  }
  
  async getProductsByCategory(categoryId: number): Promise<Product[]> {
    return Array.from(this.products.values()).filter(
      (product) => product.categoryId === categoryId
    );
  }
  
  async createProduct(insertProduct: InsertProduct): Promise<Product> {
    const id = this.productCurrentId++;
    const product: Product = { ...insertProduct, id };
    this.products.set(id, product);
    return product;
  }
  
  // Team member methods
  async getTeamMembers(): Promise<TeamMember[]> {
    return Array.from(this.teamMembers.values());
  }
  
  async getTeamMemberById(id: number): Promise<TeamMember | undefined> {
    return this.teamMembers.get(id);
  }
  
  async createTeamMember(insertTeamMember: InsertTeamMember): Promise<TeamMember> {
    const id = this.teamMemberCurrentId++;
    const teamMember: TeamMember = { ...insertTeamMember, id };
    this.teamMembers.set(id, teamMember);
    return teamMember;
  }
  
  // Review methods
  async getReviews(): Promise<Review[]> {
    return Array.from(this.reviews.values());
  }
  
  async getReviewById(id: number): Promise<Review | undefined> {
    return this.reviews.get(id);
  }
  
  async createReview(insertReview: InsertReview): Promise<Review> {
    const id = this.reviewCurrentId++;
    const review: Review = { ...insertReview, id };
    this.reviews.set(id, review);
    return review;
  }
}

export const storage = new MemStorage();
