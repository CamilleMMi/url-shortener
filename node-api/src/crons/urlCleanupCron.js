const cron = require('node-cron');
const Url = require('../models/urlModel');

const midNight = "0 0 * * *";
const thirtyDaysAgoInSeconds = 30 * 24 * 60 * 60 * 1000;

const cleanUnusedUrls = async () => {
    try {
        const now = new Date();
        const thirtyDaysAgo = new Date(now.getTime() - thirtyDaysAgoInSeconds);
    
        const result = await Url.deleteMany({ lastUse: { $lt: thirtyDaysAgo } });

        console.log(`[URL CLEANER] Deleted ${result.deletedCount} URL${result.deletedCount !== 1 ? '\'s' : ''} not used in the last 30 days.`);
    } catch (error) {
        console.error(`[URL CLEANER] Error during URL cleanup:`, error.message);
    }
}

cleanUnusedUrls();

cron.schedule(midNight, () => {
    console.log("[URL CLEANER] Cleaning started");

    cleanUnusedUrls();

    console.log("[URL CLEANER] Cleaning done");
});
