# Sistema de estudiantes — Práctica de Integración Continua

Práctica S25-26 · Herramientas de Desarrollo (UTP 2026-II).
Calcula promedios, verifica si un estudiante aprueba (nota ≥ 11) y ejecuta las pruebas
automáticamente con GitHub Actions en cada `push` y `pull_request`.

## Estructura


```
sistema-estudiantes-ci/
├── .github/workflows/ci.yml   ← workflow de CI
├── src/calificaciones.js      ← funciones a validar
├── test/calificaciones.test.js← 4 pruebas (node:test)
├── package.json
├── package-lock.json
└── .gitignore
```

## Pasos de la práctica

### 1. Requisitos
- Git, Node.js 22 o superior (`node --version`), cuenta en GitHub.

### 2. Crear el repositorio en GitHub
GitHub → **New repository** → nombre `sistema-estudiantes-ci` → Public → **Create repository**
(sin README, para que esté vacío).

### 3. Clonar, copiar los archivos y probar localmente
```bash
git clone https://github.com/TU_USUARIO/sistema-estudiantes-ci.git
cd sistema-estudiantes-ci
# copia aquí el contenido del ZIP (incluida la carpeta oculta .github)
npm ci
npm test        # → tests 4, pass 4, fail 0
```

### 4. Publicar la base en main
```bash
git add .
git commit -m "Proyecto base"
git push origin main
```

### 5. Crear rama y publicar cambios
```bash
git switch -c feature/pruebas-estudiantes
# haz algún cambio (p. ej. agrega una prueba) y luego:
git add .
git commit -m "Agregar pruebas y CI"
git push -u origin feature/pruebas-estudiantes
```

### 6. Ver la ejecución
Pestaña **Actions** → *Pruebas automaticas* → debe aparecer ✓ verde.

### 7. Provocar un fallo controlado
En `src/calificaciones.js` cambia `return promedio >= 11;` por `return promedio > 11;`
```bash
npm test                       # falla: "aprueba con promedio 11 o superior"
git add src/calificaciones.js
git commit -m "Provocar fallo controlado"
git push
```
En **Actions** aparece ✗ rojo con `expected: true  actual: false`.

### 8. Corregir y verificar
Restaura `return promedio >= 11;`
```bash
npm test                       # 4 pass
git add src/calificaciones.js
git commit -m "Corregir criterio de aprobacion"
git push
```

### 9. Pull Request
GitHub → **Pull requests → New pull request** → base `main` ← compare
`feature/pruebas-estudiantes` → esperar *All checks have passed* → **Merge**.
No fusionar mientras fallen las comprobaciones.
