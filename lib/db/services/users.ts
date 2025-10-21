// User Service - Database operations for users
import { zerodb } from '../zerodb';
import { COLLECTIONS } from '../collections';
import type { User } from '../types';

export class UserService {
  // Get all users
  static async getUsers() {
    const response = await zerodb.query<User>(COLLECTIONS.USERS);

    if (!response.success) {
      console.error('Error fetching users:', response.error);
      return [];
    }

    return response.data || [];
  }

  // Get a single user by ID
  static async getUserById(id: string) {
    const response = await zerodb.get<User>(COLLECTIONS.USERS, id);

    if (!response.success) {
      console.error('Error fetching user:', response.error);
      return null;
    }

    return response.data;
  }

  // Get user by email
  static async getUserByEmail(email: string) {
    const response = await zerodb.query<User>(COLLECTIONS.USERS, { email });

    if (!response.success || !response.data || response.data.length === 0) {
      return null;
    }

    return response.data[0];
  }

  // Create a new user
  static async createUser(user: Omit<User, 'id' | 'createdAt' | 'updatedAt' | 'verified' | 'memberSince'>) {
    const now = new Date().toISOString();
    const newUser: User = {
      ...user,
      id: crypto.randomUUID(),
      verified: false,
      memberSince: new Date().getFullYear().toString(),
      createdAt: now,
      updatedAt: now,
    };

    const response = await zerodb.insert<User>(COLLECTIONS.USERS, newUser);

    if (!response.success) {
      console.error('Error creating user:', response.error);
      return null;
    }

    return response.data;
  }

  // Update a user
  static async updateUser(id: string, updates: Partial<User>) {
    const response = await zerodb.update<User>(
      COLLECTIONS.USERS,
      id,
      {
        ...updates,
        updatedAt: new Date().toISOString(),
      }
    );

    if (!response.success) {
      console.error('Error updating user:', response.error);
      return null;
    }

    return response.data;
  }

  // Verify a user
  static async verifyUser(id: string) {
    return this.updateUser(id, { verified: true });
  }

  // Delete a user
  static async deleteUser(id: string) {
    const response = await zerodb.delete(COLLECTIONS.USERS, id);

    if (!response.success) {
      console.error('Error deleting user:', response.error);
      return false;
    }

    return true;
  }
}
