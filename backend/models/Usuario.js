import mongoose from "mongoose";
import bcrypt from "bcrypt";

const usuarioSchema = mongoose.Schema({
    nombre: {
        type: String,
        require: true,
        trim: true,
    },
    password: {
        type: String,
        require: true,
        trim: true,
    },
    email: {
        type: String,
        require: true,
        trim: true,
        unique: true,
    },
    //image: {
    //    type: Text,
    //},
    token: {
        type: String,
    },
    confirmado: {
        type: Boolean,
        default: false,
    },
    money: {
        type: Number,
        trim: true,
        default: 0,
    },
    books: {
        type: Array,
    },
    favoritos: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "BooksCreated",
    }],
    BooksLikes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "BooksCreated",
    }],
    transacciones: {
        type: Array,
    },
    hasTradeOffers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Trade",
    }],
    notificaciones: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Notificacion"
    }]
}, {
    timestamps: true,
});
//Aqui se lee todo el modelo y se toma el password para hashearlo
usuarioSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});
usuarioSchema.methods.comprobarPassword = async function (passwordFormulario) {
    return await bcrypt.compare(passwordFormulario, this.password);
};

const Usuario = mongoose.model("Usuario", usuarioSchema);
export default Usuario;