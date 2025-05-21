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
        name: "Beginner Stages",
        icon: "fas fa-star",
        description: "Perfect characters for new players",
        color: "primary"
      },
      {
        name: "Intermediate Stages",
        icon: "fas fa-fire-alt",
        description: "Characters with advanced abilities",
        color: "secondary"
      },
      {
        name: "Legendary Stages",
        icon: "fas fa-crown",
        description: "Ultimate power characters for pro players",
        color: "accent"
      },
      {
        name: "Character Bundles",
        icon: "fas fa-gift",
        description: "Special deals on multiple characters",
        color: "primary"
      }
    ];
    
    categories.forEach(category => this.createCategory(category));
    
    const products = [
      {
        name: "Stage 1: Haze",
        description: "Unlock the power of Haze with dual-colored hair and lightning powers. Perfect for beginners.",
        price: 19.99,
        image: "/attached_assets/image_1747848727752.png",
        rating: 4.5,
        reviewCount: 120,
        categoryId: 1,
        whatsappMessage: "I want to buy Stage 1: Haze character"
      },
      {
        name: "Stage 2: Hexo",
        description: "Master the dark arts with Hexo. Features multiple blades and advanced combat techniques.",
        price: 29.99,
        image: "/attached_assets/image_1747848814603.png",
        rating: 5.0,
        reviewCount: 89,
        categoryId: 1,
        whatsappMessage: "I want to buy Stage 2: Hexo character"
      },
      {
        name: "Stage 3: Volta",
        description: "Harness raw power with Volta. Features a unique mask and devastating close-combat abilities.",
        price: 39.99,
        image: "/attached_assets/image_1747848882152.png",
        rating: 4.8,
        reviewCount: 76,
        categoryId: 2,
        whatsappMessage: "I want to buy Stage 3: Volta character"
      },
      {
        name: "Stage 4: Dual Warriors",
        description: "Command both pink and blue warriors with complementary fighting styles and weapon sets.",
        price: 49.99,
        image: "/attached_assets/image_1747848951098.png",
        rating: 4.9,
        reviewCount: 112,
        categoryId: 3,
        whatsappMessage: "I want to buy Stage 4: Dual Warriors character pack"
      },
      {
        name: "Stage 5: Ultimate Power",
        description: "Reach the pinnacle of power with this legendary character. Includes exclusive weapon skins and abilities.",
        price: 59.99,
        image: "/attached_assets/image_1747849315613.png",
        rating: 5.0,
        reviewCount: 95,
        categoryId: 3,
        whatsappMessage: "I want to buy Stage 5: Ultimate Power character"
      },
      {
        name: "Complete Character Bundle",
        description: "Unlock all five character stages at a discounted price. The ultimate collection for serious players.",
        price: 149.99,
        image: "/attached_assets/image_1747848727752.png",
        rating: 4.9,
        reviewCount: 65,
        categoryId: 2,
        whatsappMessage: "I want to buy the Complete Character Bundle with all 5 stages"
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
