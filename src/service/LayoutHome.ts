import api from "./api";
import { CollectionItem, Banner } from "@/types/types";

interface LayoutData {
  data: { banners: any; collection_items: any; };
  banners: Banner[];
  collection_items: CollectionItem[];
}

class LayoutHome {
  private banners: Banner[] | null = null;
  private collectionItems: CollectionItem[] | null = null;

  private async fetchData(): Promise<void> {
    try {
      const response = await api.get<LayoutData>("layout?subdomain=supermercado");
      console.log("response ", response)
      const { banners, collection_items } = response.data.data;
      this.banners = banners;
      this.collectionItems = collection_items;
      console.log("collectionItems ", collection_items)
    } catch (error) {
      throw new Error("Erro ao buscar dados do layout.");
    }
  }

  async getCarroussel(): Promise<Banner[]> {
    if (!this.banners) {
      await this.fetchData();
    }
    return this.banners!;
  }

  async getProductsListWithCategories(): Promise<CollectionItem[]> {
    if (!this.collectionItems) {
      await this.fetchData();
    }
    return this.collectionItems!;
  }
}

export default new LayoutHome();