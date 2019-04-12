Object.defineProperty(window, 'MySweetApp', {value: 'v1.0.0', writable: false});

function deliveryMethod(): string {
    // TODO
    return 'overnight';
}

function shipWeight(): number {
    const el: HTMLElement | null = document.getElementById('weight');
    if (!el) {
        return 0;
    }
    return parseInt(el.innerHTML);
}

/**
 * @param {(string | string[])} emailAddr - An email address of array of email addresses
 */
function sendUpdates(emailAddr: string | string[]): void {
    function sendEmail(addr: string): void {
        // Default to standard delivery if empty
        // tslint:disable-next-line
        console.log(`Shipping to ${addr} via ${deliveryMethod() || 'standard'} delivery`);

        if (shipWeight() > 100) {
            // tslint:disable-next-line
            console.log('WARNING: Oversize package');
        }
    }

    // If it's an array, loop over it
    if (Array.isArray(emailAddr)) {
        emailAddr.forEach((val: string) => {
            sendEmail(val.trim());
        });
    } else {
        sendEmail(emailAddr.trim());
    }
}
