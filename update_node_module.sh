echo "Updating Node Modules"
cp -r packages/uikit node_modules/@pancakeswap/
cp -r packages/sdk node_modules/@pancakeswap/
cp -r packages/eslint-config-pancake node_modules/@pancakeswap/
echo "node_modules updates"
echo "node_modules updates"
echo "node_modules updates"
echo "node_modules updates"
echo "node_modules updates"
echo "node_modules updates"
echo "node_modules updates"
target="node_modules"
let count=0
for f in "$target"/*
do
       if [ $(basename $f) == "@pancakeswap" ]
       then 
       for j in "$target"/*
              do
              echo $(basename $j)
    echo $(basename $f)
    let count=count+1
done
echo ""
echo "Count: $count"