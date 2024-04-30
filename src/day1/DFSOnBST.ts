function SearchSource(
    curr: BinaryNode<number> | null,
    needle: number,
): boolean {
    if (!curr) {
        return false;
    }

    if (curr.value === needle) {
        return true;
    }

    if (curr.value < needle) {
        return SearchSource(curr.right, needle);
    }

    return SearchSource(curr.left, needle);
}
export default function dfs(head: BinaryNode<number>, needle: number): boolean {
    return SearchSource(head, needle);
}
