echo
echo "eslint code.ts"
if npx eslint code.ts
then
  echo "done"
else
  exit
fi
echo
#
echo "transpiling code.ts"
if npx tsc
then
  echo "done"
else
  exit
fi
echo