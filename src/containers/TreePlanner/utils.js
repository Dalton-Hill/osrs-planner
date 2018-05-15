export const updatePath = (obj, path, attribute, value) => {
  const copyPath = [...path];
  if (copyPath.length) {
    updatePath(obj[copyPath.splice(0, 1)], copyPath, attribute, value)
  } else {
    obj[attribute] = value
  }
};


export const returnPathAttr = (obj, path, attribute) => {
  const copyPath = [...path];
  if (copyPath.length) {
    return returnPathAttr(obj[copyPath.splice(0, 1)], copyPath, attribute)
  } else {
    return obj[attribute]
  }
};