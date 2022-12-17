const mongoose = require("mongoose");


const gallerySchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    category: {
        type : Array, 
        required: true,
    },
    likes: {
        type: Array,
        required: true
    },
    imageUrl : {
        type: String,
        required: true
    }
}
    {timestamps: {createdAt: "createdAt", updatedAt: "updatedAt"}}
)

const Gallery = new mongoose.model("Gallery", gallerySchema);

module.export = Gallery;