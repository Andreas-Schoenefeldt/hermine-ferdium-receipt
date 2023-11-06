/**
 *
 * @param {{setBadge: function, injectCSS: function, loop: function}} Ferdium
 */
module.exports = (Ferdium) => {

    function getBadgeCount(badge) {
        return parseInt(badge.textContent.trim(), 10);
    }

    /**
     *
     * @param {[]} theArray
     * @returns {*}
     */
    function getBadgeArraySum(theArray) {
        return theArray.map(getBadgeCount).reduce((partialSum, a) => {
            return partialSum + a;
        }, 0);
    }
    function checkUnread() {

        let counter = 0;
        const indirect = getBadgeArraySum(Array.from(
            document.querySelectorAll('.channel-list-wrapper .badge')
        ));

        const direct = getBadgeArraySum(Array.from(
            document.querySelectorAll('.chat-list-wrapper .badge')
        ));


        Ferdium.setBadge(direct, indirect);
    }

    Ferdium.loop(checkUnread);
}