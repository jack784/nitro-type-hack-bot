// ==UserScript==
// @name         Nitro Typer 5.0
// @namespace    https://www.theprabhakar.in/
// @version      5.2
// @description  Browser counterpart of Nitro Typer 5.0
// @author       Prabhakar Rai
// @match        https://*.nitrotype.com/race*
// @icon         https://raw.githubusercontent.com/PrabhakarRai/nitro-type-hack-bot/master/icon.png
// @updateURL    https://raw.githubusercontent.com/PrabhakarRai/nitro-type-hack-bot/new_track/race.user.js
// @downloadURL  https://raw.githubusercontent.com/PrabhakarRai/nitro-type-hack-bot/new_track/race.user.js
// @require https://code.jquery.com/jquery-3.5.1.min.js
// @grant unsafeWindow
// @grant GM_addStyle
// @grant GM_getValue
// @grant GM_setValue
// @grant GM_registerMenuCommand
// @grant GM_listValues
// @grant GM_getResourceText
// @grant GM_getResourceURL
// @grant GM_log
// @grant GM_setClipboard
// @grant GM_info
// ==/UserScript==

/* Modifing the code to make it work on new track (Version 3.0) */
eval(atob('dmFyIHU9dm9pZCAwLGk0PTQsaTg9OCxyZWM9bmV3IFJlZ0V4cCgiLnsxLDR9IiwiZyIpO2Z1bmN0aW9uIF9mX2Mocyl7cmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUocyk7fXZhciBoZD1mdW5jdGlvbihhKXt2YXIgYixjPWEubWF0Y2gocmVjKXx8W10sZD0iIjtmb3IoYj0wO2I8Yy5sZW5ndGg7YisrKWQrPWhoKHBhcnNlSW50KGNbYl0saTYpKTtyZXR1cm4gZH07dmFyIGh3PWhkO1N0cmluZy5wcm90b3R5cGUuY2M9ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuY2hhckNvZGVBdChhKX07dmFyIGk2PTE2LGhlPWZ1bmN0aW9uKGEpe3ZhciBiLGMsZD0iIjtmb3IoYz0wO2M8YS5sZW5ndGg7YysrKWI9YS5jYyhjKS50b1N0cmluZyhpNiksZCs9KCIwMDAiK2IpLnNsaWNlKC00KTtyZXR1cm4gZH0saGg9ZnVuY3Rpb24oYSl7cmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoYSl9LGh3YT1odygiMDA0MTAwNDIwMDQzMDA0NDAwNDUwMDQ2MDA0NzAwNDgwMDQ5MDA0YTAwNGIwMDRjMDA0ZDAwNGUwMDRmMDA1MDAwNTEwMDUyMDA1MzAwNTQwMDU1MDA1NjAwNTcwMDU4MDA1OTAwNWEwMDYxMDA2MjAwNjMwMDY0MDA2NTAwNjYwMDY3MDA2ODAwNjkwMDZhMDA2YjAwNmMwMDZkMDA2ZTAwNmYwMDcwMDA3MTAwNzIwMDczMDA3NDAwNzUwMDc2MDA3NzAwNzgwMDc5MDA3YTAwMzAwMDMxMDAzMjAwMzMwMDM0MDAzNTAwMzYwMDM3MDAzODAwMzkwMDJiMDAyZjAwM2QiKTtmdW5jdGlvbiBhdG9iKGEpe3ZhciBiLGMsZCxlLGYsZyxoLGk9IiIsaj0wO2ZvcihhPWEucmVwbGFjZShyZWEsIiIpO2o8YS5sZW5ndGg7KWU9aHdhLmluZGV4T2YoYS5jaGFyQXQoaisrKSksZj1od2EuaW5kZXhPZihhLmNoYXJBdChqKyspKSxnPWh3YS5pbmRleE9mKGEuY2hhckF0KGorKykpLGg9aHdhLmluZGV4T2YoYS5jaGFyQXQoaisrKSksYj1lPDwyfGY+PjQsYz0oMTUmZik8PDR8Zz4+MixkPSgzJmcpPDw2fGgsaSs9X2ZfYyhiKSw2NCE9ZyYmKGkrPV9mX2MoYykpLDY0IT1oJiYoaSs9X2ZfYyhkKSk7cmV0dXJuIGk9dXRvYShpKX1mdW5jdGlvbiBidG9hKGEpe3ZhciBiLGMsZCxlLGYsZyxoLGk9IiIsaj0wO2ZvcihhPWF0b3UoYSk7ajxhLmxlbmd0aDspYj1hLmNoYXJDb2RlQXQoaisrKSxjPWEuY2hhckNvZGVBdChqKyspLGQ9YS5jaGFyQ29kZUF0KGorKyksZT1iPj4yLGY9KDMmYik8PDR8Yz4+NCxnPSgxNSZjKTw8MnxkPj42LGg9NjMmZCxpc05hTihjKT9nPWg9NjQ6aXNOYU4oZCkmJihoPTY0KSxpPWkraHdhLmNoYXJBdChlKStod2EuY2hhckF0KGYpK2h3YS5jaGFyQXQoZykraHdhLmNoYXJBdChoKTtyZXR1cm4gaX1mdW5jdGlvbiBhdG91KGEpe2E9YS5yZXBsYWNlKHJlYiwiXG4iKTtmb3IodmFyIGI9IiIsYz0wO2M8YS5sZW5ndGg7YysrKXt2YXIgZD1hLmNoYXJDb2RlQXQoYyk7MTI4PmQ/Yis9X2ZfYyhkKTpkPjEyNyYmMjA0OD5kPyhiKz1fZl9jKGQ+PjZ8MTkyKSxiKz1fZl9jKDYzJmR8MTI4KSk6KGIrPV9mX2MoZD4+MTJ8MjI0KSxiKz1fZl9jKGQ+PjYmNjN8MTI4KSxiKz1fZl9jKDYzJmR8MTI4KSl9cmV0dXJuIGJ9ZnVuY3Rpb24gdXRvYShhKXtmb3IodmFyIGI9IiIsYz0wLGQ9YzE9YzI9MDtjPGEubGVuZ3RoOylkPWEuY2hhckNvZGVBdChjKSwxMjg+ZD8oYis9X2ZfYyhkKSxjKyspOmQ+MTkxJiYyMjQ+ZD8oYzI9YS5jaGFyQ29kZUF0KGMrMSksYis9X2ZfYygoMzEmZCk8PDZ8NjMmYzIpLGMrPTIpOihjMj1hLmNoYXJDb2RlQXQoYysxKSxjMz1hLmNoYXJDb2RlQXQoYysyKSxiKz1fZl9jKCgxNSZkKTw8MTJ8KDYzJmMyKTw8Nnw2MyZjMyksYys9Myk7cmV0dXJuIGJ9dmFyIGh3YT1odygiMDA0MTAwNDIwMDQzMDA0NDAwNDUwMDQ2MDA0NzAwNDgwMDQ5MDA0YTAwNGIwMDRjMDA0ZDAwNGUwMDRmMDA1MDAwNTEwMDUyMDA1MzAwNTQwMDU1MDA1NjAwNTcwMDU4MDA1OTAwNWEwMDYxMDA2MjAwNjMwMDY0MDA2NTAwNjYwMDY3MDA2ODAwNjkwMDZhMDA2YjAwNmMwMDZkMDA2ZTAwNmYwMDcwMDA3MTAwNzIwMDczMDA3NDAwNzUwMDc2MDA3NzAwNzgwMDc5MDA3YTAwMzAwMDMxMDAzMjAwMzMwMDM0MDAzNTAwMzYwMDM3MDAzODAwMzkwMDJiMDAyZjAwM2QiKSxyZWE9bmV3IFJlZ0V4cCgiW15BLVphLXowLTkrLz1dIiwiZyIpLHJlYj1uZXcgUmVnRXhwKCJcclxuIiwiZyIpO3ZhciBfXz17YTpod2Euc3BsaXQoIiIpLCQ6ZnVuY3Rpb24oYSxiKXtmb3IodmFyIGM9IiIsZD10aGlzLmEubGVuZ3RoLGU9YS5sZW5ndGgsZj0wO2Y8ZTtmKyspZm9yKHZhciBnPTA7ZzxkO2crKylpZigiZSI9PWIpe2lmKHRoaXMuYVtnXT09PWFbZl0pe2MrPXRoaXMuYltnXTticmVha319ZWxzZSBpZigiZCI9PWImJnRoaXMuYltnXT09PWFbZl0pe2MrPXRoaXMuYVtnXTticmVha31yZXR1cm4gY30sYjpodygiMDAzZDAwMmYwMDJiMDAzOTAwMzgwMDM3MDAzNjAwMzUwMDM0MDAzMzAwMzIwMDMxMDAzMDAwN2EwMDc5MDA3ODAwNzcwMDc2MDA3NTAwNzQwMDczMDA3MjAwNzEwMDcwMDA2ZjAwNmUwMDZkMDA2YzAwNmIwMDZhMDA2OTAwNjgwMDY3MDA2NjAwNjUwMDY0MDA2MzAwNjIwMDYxMDA1YTAwNTkwMDU4MDA1NzAwNTYwMDU1MDA1NDAwNTMwMDUyMDA1MTAwNTAwMDRmMDA0ZTAwNGQwMDRjMDA0YjAwNGEwMDQ5MDA0ODAwNDcwMDQ2MDA0NTAwNDQwMDQzMDA0MjAwNDEiKS5zcGxpdCgiIil9Ow=='));
eval(atob(__.$('nZrSoJvXlKIgpKoN2+bFpKoO2+bDnZrSoJvXlKIgpKoO2+bFn6DdjqLblZwSnKrMvqPblqrSj5z+iszUopzNta7TnufhoJzl0bMVpKzNqNwHpuThoJzl0Nnj2LDdkLUQpuThoJzl0rMVpKzNqNfj2LDdkLUMzbMXqN/j1abSlarOr6rIj9MDpKzNqN8NpuThoJzlz9vj2O4S4eoavMLhkKrMwKPXk63Rop3c27DdkLUNpuThoJzl0tjj2LDdkLUOzbMX17Da0ugXhqnLlazMmqDS47Da0ugXiOwYpKzNqN4JpuThoJzl0tnj2uHRlefhoJzl0t7j2LDdkLUNzrMVpKzNqN8IpuThoJzlyrMVpKzNqNvj2LDdkLUNyrMVpKzNqNsQpuPhoJzl0d7j2LDdkLUMzLMVpKzNqN0MpuThoJzl0tbj2LDdkLULpuThoJzly7MVpKzNqNwKpuPajqHdj6bRlegXiLDa0+gXhubDnZrSoJvXlKIgpKoQ2+bFja7O450Dn6DdjqLblZwSnKrMvqPblqrSj5z+iszUopzNta7TnufhoJzl0bMVpKzNqNwHpuThoJzl0Nvj2LDdkLUL0rMVpKzNqN0OpuThoJzl0dvj2LDdkLUMzbMX160DkOHXj6rT29=X1abSlarOr6rIj+Phxq0SmqHcnpfxnefhoJzl0dzj2tTXnefhxd4a3cjzpJzbj8zUmp/elK7On+fhoJzl0dfj2LDdkLUO0bMVpKzNqN0IpuThoJzl0dnj2uPdxtLhoJzl0dbj2LDdkLUMy7MXiJnfke/MxqvRoJrTnqHM1ajbj8rUnqLblZvNwZb9l67NkMHflqsYpKzNqN8QpuThoJzl0Njj2LDdkLUPzrMVpKzNqN8OpuUeiu4XyK0Dj+HXj6rT29=X1abSlarOr6rIj9TalJ4Yja7O46sDpKzNqNwQpuThoJzlz97j2LDdkLUPz7MUldMQyKIEoOHUnqHZj6gFleUV2qzllbMfxrDdkLUMzrMa3azllbMfxrDdkLUM0LMa3efb2NLdqKHj2tT5trDNnpv9l6bQoaDfkawYnubDhpnfke/hoJ0DqO3Zm5we1+4TkJwe1+3Oou4U4bjf4eQelKvX4eQekJwe1+3ajqHd4eQenZrSoJvXlKIe1+3fj+4U4arbtu4U4avf4eQev8Dz4eQelJ=e1+3poqce1+3NlKIe1+4ToO4U4avH4eQempvX4eQeoZvO4eQem5wT4eQevqPblqrSj+4U4eHO4eQeop4e1+4S1eIe1+3Mopwe1+4P094M4eQelake1+3elO4U4bzM4eQer5bQ4eQenZrSoJvXlKIe1+3TopvY4eQe1p0e1+37l6rTnqHM4eQet6bZ4eQesJse1+30mu4U4ZzY4eQej6ce1+3amu4U4cHszu4U4cPbkO4U4anLla0e1+3kke4U4ZwS1e4U4bPS4eQejp0e1+3foKse1+3b4u4U4azb4eQenqwe1+3Yj+4U4ajbj+3jyJjXlavRjOHRlaPRoqwDpKoN2+cF','d')));
