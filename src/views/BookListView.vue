<template>
    <div>
        <hi>Books with ISBN > 1000</hi>
        <ul>
            <li v-for="book in books" :key="book.id">
              {{ book.name }} - ISBN: {{ book.isbn }}
            </li>
        </ul>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';

import { collection, query, where, getDocs } from 'firebase/firestore';

export default{
components: {
 
},
setup() {
  const books = ref([]);

  const fetchBooks = async () => {
    try {
      const q = query(collection(db, 'books'), where('isbn', '>', 1000));
      const querySnapshot = await getDocs(q);
      const booksArray = [];
      querySnapshot.forEach((doc) => {
        booksArray.push({ id: doc.id, ...doc.data() });
      });
      books.value = booksArray;
      console.log("booklist: ", books.value);
    } catch (error) {
      console.error('Error fetching books: ', error);
    }
  };

  onMounted(() => {
    fetchBooks();
  });

  return {
    books
  };
 }
}; 
</script>
