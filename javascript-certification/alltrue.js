function truthCheck(collection, prop) {
  return collection.every((elem) => elem[prop]);
}
