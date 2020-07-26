export default function findFlashcardFolderById(array, id) {
  return array.find((element) => {
    return element.id === id;
  })
}
