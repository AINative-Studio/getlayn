// ZeroDB Client Configuration
// Documentation: https://docs.zerodb.io

const ZERODB_API_KEY = process.env.NEXT_PUBLIC_ZERODB_API_KEY;
const ZERODB_URL = process.env.NEXT_PUBLIC_ZERODB_URL || 'https://api.zerodb.io';

export interface ZeroDBResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
}

class ZeroDBClient {
  private apiKey: string;
  private baseUrl: string;

  constructor(apiKey: string, baseUrl: string) {
    this.apiKey = apiKey;
    this.baseUrl = baseUrl;
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ZeroDBResponse<T>> {
    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        ...options,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`,
          ...options.headers,
        },
      });

      const data = await response.json();

      if (!response.ok) {
        return {
          success: false,
          error: data.message || 'Request failed',
        };
      }

      return {
        success: true,
        data,
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error occurred',
      };
    }
  }

  // Collection operations
  async query<T>(collection: string, filters?: Record<string, any>): Promise<ZeroDBResponse<T[]>> {
    return this.request<T[]>(`/collections/${collection}/query`, {
      method: 'POST',
      body: JSON.stringify({ filters }),
    });
  }

  async insert<T>(collection: string, data: T): Promise<ZeroDBResponse<T>> {
    return this.request<T>(`/collections/${collection}/insert`, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async update<T>(
    collection: string,
    id: string,
    data: Partial<T>
  ): Promise<ZeroDBResponse<T>> {
    return this.request<T>(`/collections/${collection}/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(data),
    });
  }

  async delete(collection: string, id: string): Promise<ZeroDBResponse<void>> {
    return this.request<void>(`/collections/${collection}/${id}`, {
      method: 'DELETE',
    });
  }

  async get<T>(collection: string, id: string): Promise<ZeroDBResponse<T>> {
    return this.request<T>(`/collections/${collection}/${id}`, {
      method: 'GET',
    });
  }

  // Batch operations
  async insertMany<T>(collection: string, data: T[]): Promise<ZeroDBResponse<T[]>> {
    return this.request<T[]>(`/collections/${collection}/insert-many`, {
      method: 'POST',
      body: JSON.stringify({ items: data }),
    });
  }

  async updateMany<T>(
    collection: string,
    filters: Record<string, any>,
    data: Partial<T>
  ): Promise<ZeroDBResponse<number>> {
    return this.request<number>(`/collections/${collection}/update-many`, {
      method: 'PATCH',
      body: JSON.stringify({ filters, data }),
    });
  }

  async deleteMany(
    collection: string,
    filters: Record<string, any>
  ): Promise<ZeroDBResponse<number>> {
    return this.request<number>(`/collections/${collection}/delete-many`, {
      method: 'DELETE',
      body: JSON.stringify({ filters }),
    });
  }
}

// Export singleton instance
export const zerodb = new ZeroDBClient(
  ZERODB_API_KEY || '',
  ZERODB_URL
);

// Export client class for custom instances
export { ZeroDBClient };
