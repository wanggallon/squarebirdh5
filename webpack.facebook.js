const path = require("path");
const webpack = require("webpack");
const CopyPlugin = require('copy-webpack-plugin');
const HTMLWebpackPlugin = require("html-webpack-plugin");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = env => merge(common(env), {
    mode: "production",
    plugins: [
        new webpack.DefinePlugin({
            'process.env.PLATFORM': JSON.stringify('FACEBOOK'),
            'process.env.INTERSTITIAL_AD_ID': JSON.stringify('353383808905954_370767927167542'),
            'process.env.REWARDED_AD_ID': JSON.stringify('353383808905954_370768113834190'),
        }),
        new CopyPlugin([
            { from: './support/facebook', to: path.resolve(__dirname, 'dist')}
        ]),
        new HTMLWebpackPlugin({
            title: 'Square Bird',
            template: './src/index.html',
            chunks: {
                head: [
                    { src: "https://connect.facebook.net/en_US/fbinstant.6.3.js" }
                ],
                attributionPixel: `
                    <!-- Facebook Pixel Code -->
                    <script>
                    !function(f,b,e,v,n,t,s)
                    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                    n.queue=[];t=b.createElement(e);t.async=!0;
                    t.src=v;s=b.getElementsByTagName(e)[0];
                    s.parentNode.insertBefore(t,s)}(window, document,'script',
                    'https://connect.facebook.net/en_US/fbevents.js');
                    fbq('init', '284513106254823');
                    fbq('track', 'PageView');
                    </script>
                    <noscript><img height="1" width="1" style="display:none"
                    src="https://www.facebook.com/tr?id=284513106254823&ev=PageView&noscript=1"
                    /></noscript>
                    <!-- End Facebook Pixel Code -->
                `
            }
        })
    ]
});