export default function bfs(head: BinaryNode<number>, needle: number): boolean {
    const q = [];

    q.unshift(head);

    while (q.length > 0) {
        const v = q.shift() as BinaryNode<number>;
        if (v?.value === needle) {
            return true;
        }

        if (v.left) {
            q.push(v?.left);
        }

        if (v.right) {
            q.push(v?.right);
        }
    }

    return false;
}
