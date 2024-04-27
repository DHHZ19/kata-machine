type Node<T> = {
    value: T;
    prev?: Node<T>;
    next?: Node<T>;
};
export default class DoublyLinkedList<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = undefined;
    }

    prepend(item: T): void {
        this.length++;
        const node = { value: item } as Node<T>;
        if (!this.head) {
            this.head = this.tail = node;
            return;
        }
        node.next = this.head;
        this.head.prev = node;
        this.head = node;
    }
    insertAt(item: T, idx: number): void {
        let node = { value: item } as Node<T>;
        if (idx > this.length) {
            throw new Error("Oh No");
        } else if (idx === this.length) {
            this.append(item);
            return;
        } else if (idx === 0) {
            this.prepend(item);
            return;
        }
        this.length++;
        let curr = this.head;
        for (let i = 0; curr && i < idx; i++) {
            if (curr.next) {
                curr = curr.next;
            }
        }
        curr = curr as Node<T>;

        node.next = curr;
        node.prev = curr.prev;
        curr.prev = node;
        if (curr.prev) {
            curr.prev.next = node;
        }
    }

    append(item: T): void {
        let node = { value: item } as Node<T>;
        this.length++;

        if (!this.tail) {
            this.head = this.tail = node;
            return;
        }
        node.prev = this.tail;
        this.tail.next = node;
        this.tail = node;
    }

    remove(item: T): T | undefined {
        let curr = this.head;
        while (curr && curr.value != item) {
            curr = curr.next;
        }
        if (curr?.prev) {
            let tmp = curr;
            curr.prev.next = curr.next;
            return curr.value;
        }

        return undefined;
    }
    get(idx: number): T | undefined {
        if (this.length === 0) {
            return undefined;
        }
        let curr = this.head;
        for (let i = 0; curr && i < idx; i++) {
            curr = curr.next;
        }
        return curr?.value;
    }
    removeAt(idx: number): T | undefined {
        if (this.length === 0) {
            return undefined;
        }

        let curr = this.head;
        for (let i = 0; curr && i < idx; i++) {
            curr = curr.next;
        }

        if (curr?.prev) {
            let tmp = curr;
            curr.prev.next = curr.next;
            return curr.value;
        }

        return undefined;
    }
}
