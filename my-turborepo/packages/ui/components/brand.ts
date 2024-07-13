export function Brand({ title }: { title: string }) {
  return `
    <p>
      <span id="brand" class="brand" style="color: red;">
        ${title}
      </span>
    </p>
  `;
}
