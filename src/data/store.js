import { reactive } from 'vue';

export const store = reactive({
  apiUrl: 'https://rickandmortyapi.com/api/character',  
  nameUrl: 'https://rickandmortyapi.com/api/character?name',
  characterList:[],
  characterName:[],
  queryParams:{
    nums: 20,
    offset: 0,
  }
})