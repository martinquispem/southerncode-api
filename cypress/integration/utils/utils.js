

class Utils {

    getAllImages(resp) {
        const list = []
        for (let i = 0; i < 3; i++) {
            const c = resp[i].FirstURL + resp[i].Icon.URL
            list.push(c)
        }
        for (let i = 3; i < resp.length; i++) {
            resp[i].Topics.forEach(element => {
                const c = element.FirstURL + element.Icon.URL
                if (c.includes('.jpg') || c.includes('.png') || c.includes('.ico')) {
                    list.push(c)
                }
            });
        }
        return list
    }

    getAllUrls(resp) {
        const list = []
        list.push(resp.AbstractURL)
        resp.RelatedTopics.forEach(e => {
            const c = e.FirstURL + e.Icon.URL
            list.push(c)
        })
        resp.Results.forEach(e => {
            const c = e.FirstURL + e.Icon.URL
            list.push(c)
        })
        return list
    }
}

export default new Utils();