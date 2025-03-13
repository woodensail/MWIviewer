export async function readableStreamToBase64(stream: any, onProgress?: (size: number) => void) {
  const reader = stream.getReader();
  const chunks = [];

  // 读取流中的所有数据块
  let totalBytesRead = 0;
  while (true) {
    const {done, value} = await reader.read();
    if (done) break;
    totalBytesRead += value?.length ?? 0
    onProgress?.(totalBytesRead)
    chunks.push(value);
  }

  // 将所有数据块合并为一个完整的 Uint8Array
  const totalLength = chunks.reduce((acc, chunk) => acc + chunk.length, 0);
  const result = new Uint8Array(totalLength);
  let offset = 0;
  for (const chunk of chunks) {
    result.set(chunk, offset);
    offset += chunk.length;
  }

  // 将 Uint8Array 转换为 Base64
  return uint8ArrayToBase64(result);
}

// 将 Uint8Array 转换为 Base64 的辅助函数
function uint8ArrayToBase64(uint8Array: any) {
  const binaryString = Array.from(uint8Array).map((byte: any) => String.fromCharCode(byte)).join("");
  return btoa(binaryString);
}