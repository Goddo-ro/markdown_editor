import { collection, getDocs, deleteDoc, updateDoc, doc } from "firebase/firestore";
import { db } from "../firebase";

export default class MarkdownService {
  static markdownsCollectionRef = collection(db, "docs");

  static async getAll() {
    return await getDocs(this.markdownsCollectionRef);
  }

  static async delete(id) {
    const markdownDoc = doc(db, "docs", id);
    return await deleteDoc(markdownDoc);
  }

  static async update(id, title, body) {
    const markdownDoc = doc(db, "docs", id);
    return await updateDoc(markdownDoc, {title: title, body: body});
  }
}


