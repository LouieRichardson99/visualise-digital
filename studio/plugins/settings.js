export const singletonPlugin = (types) => {
  return {
    name: 'singletonPlugin',
    document: {
      // Hide 'Singletons (such as Homepage)' from new document options
      newDocumentOptions: (prev, {creationContext}) => {
        if (creationContext.type === 'global') {
          return prev.filter((templateItem) => !types.includes(templateItem.templateId))
        }

        return prev
      },

      // Removes the "duplicate" action on the Singletons (such as Homepage)
      actions: (prev, {schemaType}) => {
        if (types.includes(schemaType)) {
          return prev.filter(({action}) => action !== 'duplicate')
        }

        return prev
      },
    },
  }
}
