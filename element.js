export const element = {
    /*
    * Create new element
    * 
    * @param object options
    *
    * @return HTMLCollection Element
    */
    create: (options) => {
        if ( typeof options != 'object' || !options ) 
            options = {tagName: 'span'}

        let $element = null

        if ( options.tagName == 'svg' || options.tagName == 'path' )
            $element = document.createElementNS('http://www.w3.org/2000/svg', options.tagName)
        else
            $element = document.createElement(options.tagName)

        for ( let prop in options ) {
            if ( prop === 'wrapper' || prop === 'tagName' || prop === 'xmlns' )
                continue

            if ( prop === 'text' ) {
                $element.innerHTML = options[prop]
                continue
            }

            if ( prop === 'checked' ) {
                $element.checked = options[prop]
                continue
            }                

            if ( options.tagName === 'svg' || options.tagName == 'path' )
                $element.setAttributeNS(null, prop, options[prop])
            else
                $element.setAttribute(prop, options[prop])
        }

        return $element
    }
}
