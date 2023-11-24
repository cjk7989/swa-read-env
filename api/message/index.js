// api/getAppSetting/index.js
module.exports = async function (context, req) {
    const appSetting = process.env.MY_APP_SETTING;
    context.res = {
        body: appSetting
    };
};
