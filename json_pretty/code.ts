const data: Record<string, number> = { 'alpha':0, 'bravo':1 };
const pretty: string = JSON.stringify(data, null, 2);
const preformat: HTMLElement | null = document.getElementById('preformat');
if (preformat !== null) {
  preformat.innerHTML = pretty;
}
