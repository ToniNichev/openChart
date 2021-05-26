
import mongoDB  from'../connectors/database/mongodb';

const collectionName = 'feature-flags';

export default {

    findFeatureFlagByName: async (flagName) => {
      const result = await mongoDB.find({ flagName }, collectionName);
      return result;
    },

    
   getFeatureFlags: async (url) => {
    const result = await mongoDB.find({}, collectionName);
    return result;     
   },

   updateFeatureFlag: async (searchObject, newObject) => {
     delete newObject._id;
    mongoDB.update(searchObject, newObject, collectionName, (result) => {
      return true;
    });     
   },    

   addFeatureFlag: async (flagData) => {
    mongoDB.add(flagData, collectionName, () => {
      return true;
    });     
   }, 

   dropdb: async () => {
    const result = mongoDB.dropDB();
    return result;
   },

   setup: async () => {
     mongoDB.dropDB();
     const obj = [
      {
        "flagName" : "quickLinks",
        "value": "on",
        "group": "switches"
      },
      {
        "flagName" : "featuredNewsHero",
        "value": "on",
        "group": "switches"
      },
      {
        "flagName" : "latestNews",
        "value": "on",
        "group": "switches"
      }                  
     ]
    mongoDB.add(obj, collectionName, () => {}); 
    const pages = [
      {
        "url" : "home",
        "title" : "home page",
        "type" : "blogpost",
        "test": [
          {
            "one": "one"
          }
        ]
      }
    ];
    mongoDB.add(pages, 'pages', () => {}); 
   }   

}
