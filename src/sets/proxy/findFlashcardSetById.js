export default function findFlashcardSetById(array, id) {
  return array.find((element) => {
    return element.id === id;
  })
}
