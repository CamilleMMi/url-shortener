const mongoose = require('mongoose');
const validator = require('validator');
const { customAlphabet } = require('nanoid');
const configuration = require('../configurations/configuration');

const { domain_name } = configuration;
const nanoid = customAlphabet('abcdefghijklmnopqrstuvwxyz0123456789', 6);

const urlSchema = new mongoose.Schema(
    {
        originalUrl: {
            type: String,
            required: true,
            validate: { 
                validator: value => validator.isURL(value, { protocols: ['http','https','ftp'], require_tld: true, require_protocol: true }),
                message: 'Must be a Valid URL' 
            }
        },
        shortUrl: {
            type: String,
            unique: true,
            required: true
        },
        slug: {
            type: String,
            unique: true,
            required: true
        },
        lastUse: {
            type: Date,
            default: Date.now
        },
        clickCount: {
            type: Number,
            default: 0
        }
    },
    { timestamps: true }
);

urlSchema.pre('save', function (next) {
    this.shortUrl = this.shortUrl || undefined;
    this.slug = this.slug || undefined;
    this.lastUse = this.lastUse || undefined;
    this.clickCount = this.clickCount || 0;

    next();
});

urlSchema.methods.toJSON = function() {
    const url = this.toObject();

    delete url.__v;

    return url;
};

urlSchema.methods.generateSlug = async function () {
    let slug;
    do {
        slug = nanoid();
    } while (await mongoose.model('Url').exists({ slug }));
    this.slug = slug;
    this.shortUrl = domain_name + slug;
};

const Url = mongoose.model('Url', urlSchema);

module.exports = Url;