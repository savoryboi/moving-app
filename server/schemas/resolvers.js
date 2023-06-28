const { ApolloError } = require("apollo-server-express");
const Item = require('../models/Item');
const Category = require('../models/Category');

const resolvers = {
    Query: {
        async getAllItems() {
            return await Item.find()
        }, 
        async getOneItem(_, args) {
            console.log(args)
            const item = await Item.findById(args.id);
            return item;
        },
        async getAllCategories() {
            return await Category.find().populate("categoryItems")
        }, 
        async getOneCategory(_, args) {
            const category = await Category.findById(args.id).populate("categoryItems")
            return category;
        }
    },

    Mutation: {
        async addItem(_, args) {
            const { itemName, itemCategory, itemTag } = args;
      
            // Create the item
            const newItem = await Item.create({ itemName, itemCategory, itemTag });
            
            // Update the associated category
            const category = await Category.findById(itemCategory);
            if (!category) {
              throw new Error('Category not found');
            }
            category.categoryItems.push(newItem._id);
            await category.save();
            
            return newItem;
        },

        async addCategory(_, {categoryName}) {
            return await Category.create({
                categoryName
            });
        }
    }
}

module.exports = resolvers;