const data = [
    {
        id: 1,
        desc: 'I’m an engineer at Stripe where I help design, build, and run our API and maintain our public-facing developer tooling. \n\n I recently spent quite a few years at Heroku where I helped create our V3 API and refine and operate its central supporting services. I’m still a strong believer that developers at every product company shouldn’t be spending too much time thinking about infrastructure, and have access to a deployment mechanism as easy as git push heroku master. \n\n Having written software professionally for many years now, I’m convinced that the default result given our modern processes and tools are products with undesirable levels of fragility. These days I’m especially interested in ways to improve the robustness and longevity of software, and reduce toil in operating it. I have little doubt that powerfully type-safe languages which expose more problems at compile time are the future. Though nascent today, I think that soon the most pragmatic option will be Rust. \n\n My favorite movie is Sofia Coppola’s Lost in Translation. My favorite book is Michael Crichton’s Rising Sun (although I like a lot of others). I also like running, photography, history, meditation, urban design, and metal. \n\n A few times a year I publish a newsletter called Passages & Glass. If you liked some of the other content here, you should consider subscribing.        '
    },
    {
        id: 2,
        title: 'Technology',
        desc: 'This site is a static set of HTML, JS, CSS, and image files built using a custom Go executable, stored on S3, and served by a number of worldwide edge locations by CloudFront to help ensure great performance around the globe. It’s deployed automatically by CI as code lands in its master branch on GitHub. The architecture is based on the idea of the Intrinsic Static Site. \n\n | It was previously running Ruby/Sinatra stack, hosted on Heroku, and using CloudFlare as a CDN.        '
    },
    {
        id: 3,
        title: 'Design',
        desc: 'The responsive design aims to improve readability and emphasize content through typography, whitespace, and clean lines compared to earlier incarnations of my work. It wouldn’t have been possible without the timeless beauty of Helvetica.'
    }
]

export default data